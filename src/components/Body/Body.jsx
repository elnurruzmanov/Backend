import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonNotice, Card, Container, Flexing } from "./style";

const Body = () => {
  const [data, setData] = useState([]);

  const AllFetchingData = async () => {
    await axios.get("https://travels-book.herokuapp.com/api/travel").then((res) => {
      setData(res?.data?.travels);
    });
  };

  useEffect(() => {
    AllFetchingData();
  }, []);

  const getDelete = async(ids)=>{
    await axios.delete(`https://travels-book.herokuapp.com/api/travel/${ids}`)
    AllFetchingData()
  }

  return (
    <Container>
      <Flexing>
        <Container.Input type={"text"} placeholder="search"></Container.Input>
        <Container.Btn>Search</Container.Btn>
      </Flexing>

      {/* card */}
      {data.map((value) => {
        return (
          <Card key={value._id}>
            <Card.Img
              src={value?.image}
              alt="imgs"
            />
            <Card.Title>{value?.title}</Card.Title>
            <Card.Descr>{value?.descr}</Card.Descr>
            <Flexing>
              <ButtonNotice colored="blue">Update</ButtonNotice>
              <ButtonNotice textBlack colored="yellow">
                View
              </ButtonNotice>
              <ButtonNotice onClick={()=>getDelete(value?._id)} colored="red">Delete</ButtonNotice>
            </Flexing>
          </Card>
        );
      })}
    </Container>
  );
};

export default Body;
