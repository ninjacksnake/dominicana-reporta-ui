import { Avatar, Image, List } from "antd";
import React, { useEffect, useState } from "react";
import "./listComp.css";
import car  from '../assets/car.png'
import accident  from '../assets/carAccident.png'
import cord  from '../assets/cord.png'
import drenaje  from '../assets/drenaje.png'
import semafo  from '../assets/semarfort.png'
import road  from '../assets/road.png'
import trash  from '../assets/trash.png'
import faucet  from '../assets/llaveDeAgua.png'



const ListComp = ({ data }) => {
  const [initLoading, setInitLoading] = useState(false);
const servicePicture = {
  car,
  accident,
  cord,
  drenaje,
  semafo,
  road,
  trash,
  faucet
}
  return (
    <>
        {/* <Image src={logo} /> */}
      <List
        className="client-indicator-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
           
            <List.Item.Meta
              avatar={<Avatar src={servicePicture[item.picture]} size={50} /> }
              title={<a href={item.link}>{item.name}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
           
            />
            <div style={{ marginRight: "100px" }}>
              <h3>{item.points}</h3>
            </div>
          </List.Item>
        )}
      />
    </>
  );
};

export default ListComp;
