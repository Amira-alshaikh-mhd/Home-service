import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../components/Heading";
import BusinessListItem from "./BusinessListItem";
import Colors from "../../Utils/Colors";

export default function BusinessList() {
  const [businessLists, setBusinessLists] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((resp) => {
      console.log("resp", resp);
      setBusinessLists(resp?.businessLists);
    });
  };

  return (
    <View>
      <Heading text={"Latest Business"} isViewAll={true} />
      <FlatList 
      data={businessLists}

      renderItem={({item, index})=>(
        <View>

          {/* <BusinessListItem business={item} />
           */}


           <Text>{item.name}</Text>
           <Image
           source={{uri:item?.images[0]?.url}}
           style={{width:200,height:200}}
           />
        </View>

      )}
      />

  

    </View>
  );
}
