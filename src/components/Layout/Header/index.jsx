import React, { useState, useRef, useEffect } from "react";
import { AutoComplete, Input, Affix, Avatar, Dropdown } from "antd";
import { Wrapper, Logo, Search } from "./styled";
import { StyledButtonAntd } from "../../styled";
import { useNavigate } from "react-router-dom";
import SignIn from "../../Popup/SignIn";
import SignUp from "../../Popup/SignUp";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { ShowSuccess } from "../../Message";
import { apiGetMovies } from "../../../services/request/api";
import { getUser } from "../../../redux/appSlice";

const Header = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [movies, setMovies] = useState([]);
  const user = useSelector((state) => state.app.user);

  const signInRef = useRef();
  const signUpRef = useRef();

  console.log(user);

  const getMovies = async () => {
    const data = await apiGetMovies();
    setMovies(data.content);
  };

  const onLogOut = () => {
    navigation("/");
    dispatch(getUser({}));
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
          <div key={index}>
            <h1>{movie?.tenPhim}</h1>
          </div>
        ),
      };
    });
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    navigation(`/movie-detail/${value}`);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <SignIn ref={signInRef} />
      <SignUp ref={signUpRef} />
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
                    label: <p>Thông tin tài khoản</p>,
                  },
                  {
                    key: 2,
                    label: <p>Lịch sử đặt vé</p>,
                  },
                  {
                    key: 3,
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
                <p style={{ fontWeight: 500, color: "white" }}>
                  {user.taiKhoan}
                </p>
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
    </>
  );
};

export default Header;
