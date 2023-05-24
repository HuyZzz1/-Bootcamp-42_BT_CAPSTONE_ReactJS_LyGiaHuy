import React, { useEffect, useState } from "react";
import { Wrapper, StyledButton } from "./styled";
import ListMovies from "./ListMovies";
import { apiGetMovies } from "../../../services/request/api";

const dataMenu = [
  {
    id: 1,
    name: "PHIM ĐANG CHIẾU",
  },
  {
    id: 2,
    name: "PHIM SẮP CHIẾU",
  },
];

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [dataSelectedMovies, setDataSelectedMovies] = useState([]);
  const [selectedItem, setSelectedItem] = useState(1);

  const getMovies = async () => {
    try {
      const data = await apiGetMovies();
      setMovies(data.content);
      setDataSelectedMovies(
        data.content.filter((movie) => movie.dangChieu === true)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedIdItem = (selectedId, nameItem) => {
    setSelectedItem(selectedId);

    if (nameItem === "PHIM ĐANG CHIẾU") {
      const data = movies.filter((movie) => movie.dangChieu === true);
      setDataSelectedMovies(data);
    } else {
      const data = movies.filter((movie) => movie.dangChieu === false);
      setDataSelectedMovies(data);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          paddingTop: "1.875rem",
        }}
      >
        {dataMenu.map((item) => (
          <StyledButton
            key={item.id}
            active={selectedItem === item.id}
            onClick={() => handleSelectedIdItem(item.id, item.name)}
          >
            {item.name}
          </StyledButton>
        ))}
      </div>
      <ListMovies data={dataSelectedMovies} />
    </Wrapper>
  );
};

export default Movies;
