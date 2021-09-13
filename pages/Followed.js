import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import FollowedCategories from "../components/FollowedCategories";

const Followed = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FollowedCategories
        logo="https://image.api.playstation.com/vulcan/img/rnd/202106/0806/7KJILbdp9AEmmrELwJCMJqc2.png?w=440"
        name="Fornite"
        viewers="300K"
      />
      <FollowedCategories
        logo="https://static.wikia.nocookie.net/callofduty/images/3/3d/Warzone_Artwork_CoDWarzone_MW.jpg/revision/latest/top-crop/width/360/height/450?cb=20200331223136"
        name="Call of Duty"
        viewers="48K"
      />
      <FollowedCategories
        logo="https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg"
        name="Valorant"
        viewers="39K"
      />
      <FollowedCategories
        logo="https://www.techadvisor.com/cmsdata/features/3787778/gtav-review_thumb800.jpg"
        name="Grand Theft Auto V"
        viewers="98K"
      />
    </ScrollView>
  );
};

export default Followed;

const styles = StyleSheet.create({});
