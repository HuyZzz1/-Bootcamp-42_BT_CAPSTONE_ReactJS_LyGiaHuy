import React, { useState, useRef } from "react";
import { AutoComplete, Input, Affix } from "antd";
import { Wrapper, Logo, Search } from "./styled";
import { StyledButtonAntd } from "../../styled";
import { useNavigate } from "react-router-dom";
import SignIn from "../../Popup/SignIn";
import SignUp from "../../Popup/SignUp";

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
const Header = () => {
  const navigation = useNavigate();
  const [options, setOptions] = useState([]);
  const signInRef = useRef();
  const signUpRef = useRef();
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };

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
                />
              </AutoComplete>
            </Search>
          </div>
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
        </Wrapper>
      </Affix>
    </>
  );
};

export default Header;
