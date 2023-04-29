import React, { useState, useRef, useEffect } from "react";
import { AutoComplete, Input, Affix, Avatar, Dropdown } from "antd";
import { Wrapper, Logo, Search, WrapperLoading } from "./styled";
import { StyledButtonAntd } from "../../styled";
import { Outlet, useNavigate } from "react-router-dom";
import SignIn from "../../Popup/SignIn";
import SignUp from "../../Popup/SignUp";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { ShowSuccess } from "../../Message";
import { apiGetMovies, apiGetUser } from "../../../services/request/api";
import Info from "../../Popup/Info";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/movieSlice";
import Loading from "../../Loading";

const Header = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [infoUser, setInfoUser] = useState();
  const user = useSelector((state) => state.movie.user);
  const [isLoading, setLoading] = useState(true);

  const signInRef = useRef();
  const signUpRef = useRef();
  const infoRef = useRef();

  const onInfo = () => infoRef.current.open(infoUser);

  const getMovies = async () => {
    const data = await apiGetMovies();
    setMovies(data.content);
    setLoading(false);
  };

  const getUser = async () => {
    const data = await apiGetUser();
    setInfoUser(data?.content);
  };

  const onLogOut = () => {
    navigation("/");
    dispatch(setUser({}));
    localStorage.removeItem("ACCESS_TOKEN");
    ShowSuccess("Đăng xuất thành công");
  };

  const searchResult = (query) => {
    const newMovies = movies.filter(
      (movie) => movie.tenPhim.toUpperCase().indexOf(query.toUpperCase()) !== -1
    );

    return newMovies.map((movie, index) => {
      return {
        value: movie.maPhim,
        label: (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <Avatar src={movie.hinhAnh} size={50} />
            <h4>{movie?.tenPhim}</h4>
          </div>
        ),
      };
    });
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
    setKeyword(value);
  };

  const onSelect = (value) => {
    navigation(`/movie-detail/${value}`);
    setKeyword("");
  };

  useEffect(() => {
    getMovies();
    getUser();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <SignIn ref={signInRef} />
      <SignUp ref={signUpRef} />
      <Info ref={infoRef} />
      <Affix offsetTop={0}>
        <Wrapper>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Logo onClick={() => navigation("/")}>Movies</Logo>
            <Search>
              <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{
                  width: "100%",
                }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                value={keyword}
              >
                <Input.Search
                  size="large"
                  placeholder="Nhập tên phim tìm kiếm"
                  enterButton
                  allowClear
                />
              </AutoComplete>
            </Search>
          </div>

          {user?.email ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 1,
                    label: <p onClick={onInfo}>Thông tin tài khoản</p>,
                  },
                  {
                    key: 2,
                    label: (
                      <p style={{ color: "red" }} onClick={onLogOut}>
                        Đăng xuất
                      </p>
                    ),
                  },
                ],
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                }}
              >
                <Avatar icon={<UserOutlined />} />
                <p style={{ fontWeight: 500, color: "white" }}>{user.hoTen}</p>
              </div>
            </Dropdown>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <StyledButtonAntd
                type="primary"
                onClick={() => signInRef.current.open()}
              >
                Đăng nhập
              </StyledButtonAntd>
              <StyledButtonAntd onClick={() => signUpRef.current.open()}>
                Đăng kí
              </StyledButtonAntd>
            </div>
          )}
        </Wrapper>
      </Affix>
      <Outlet />
    </>
  );
};

export default Header;
