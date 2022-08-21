import React from "react";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
const TrayListComponent = (props: any) => {
  const { trayType, data } = props;
  return (
    <TrayContainer>
      <TrayType>{trayType}</TrayType>
      <TrayList>
        {data.itemids.map((el: any, index: number) => (
          <TrayListItem key={index}>
            <TrayListItemDetail className="trayList_item_detail">
              <TrayListItemTitle>{data.items[el].title}</TrayListItemTitle>
              <TrayListItemSubtitle>
                {data.items[el].genre[0]} {data.items[el].channelName}
              </TrayListItemSubtitle>
              <TrayListItemDescription className="trayList_item_detail-description">
                {data.items[el].description}
              </TrayListItemDescription>
              {/* <ActionButton>
                <BsFillPlayFill />
                <span>WATCH MOVIE</span>
              </ActionButton> */}
              <ActionButton>
                <IoMdAdd />
                <span>ADD TO WATCHLIST</span>
              </ActionButton>
            </TrayListItemDetail>
          </TrayListItem>
        ))}
      </TrayList>
    </TrayContainer>
  );
};
const ActionButton = styled.div`
  margin: 5px 0;
  display: flex;
  gap: 10px;
  padding: 5px 2px;
  border-radius: 2px;
  font-size: 0.6rem;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #424753;
  }
`;
const TrayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TrayType = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
const TrayList = styled.div`
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 100%;

  flex-wrap: nowrap;
  overflow: scroll;
  width: 100vw;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
const TrayListItem = styled.div`
  border-radius: 5px;
  box-sizing: content-box;
  background: url("/images/anupama.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: top center; */
  min-width: 150px;
  width: 200px;
  height: 200px;
  position: relative;
  /* &:hover {
    transform: scale(1.5);
    border-radius: 5px;
  } */
`;
const TrayListItemDetail = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, #141b29, #0c111b 300px);

  display: flex;
  flex-direction: column;
`;
const TrayListItemTitle = styled.div`
  font-size: 0.7rem;
  width: 100%;
  font-weight: 800;
  /* padding: 5px; */
  margin: 5px 0;
`;
const TrayListItemSubtitle = styled.div`
  font-size: 0.6rem;
  width: 100%;
  margin-bottom: 5px;
`;
const TrayListItemDescription = styled.div`
  width: 50%;
  font-size: 0.5rem;
  width: 100%;
  /* padding: 10px; */

  height: 20px;
  overflow: scroll;
`;
export default TrayListComponent;
