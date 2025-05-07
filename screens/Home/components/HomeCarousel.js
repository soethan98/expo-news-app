
import { Image, View,Dimensions,StyleSheet  } from "react-native";
import Carousel from "react-native-reanimated-carousel";


const IMAGES = [
    {
        id: 1,
        image_url: 'https://dam.mediacorp.sg/image/upload/s--NCJTmNpC--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2021-08:cna,w_0.1/f_auto,q_auto/c_fill,g_auto,h_468,w_830/v1/mediacorp/cna/image/2025/05/02/dsc_8542.jpg?itok=ADSTEFqM'
    },
    {
        id: 2,
        image_url: 'https://www.indianagazette.com/leisure/dear-abby-wife-values-gambling-over-her-10-year-marriage/article_6b01f06b-7921-478f-9be8-f4424a74bc30.html'
    },
    {
        id: 3,
        image_url: 'https://www.enca.com/sites/default/files/styles/large/public/2024-04/WhatsApp%20Image%202024-04-03%20at%2005.40.09.jpeg.webp?itok=29ZjxJwS'
    },
    {
        id: 4,
        image_url: 'https://media.assettype.com/sentinelassam-english%2F2025-05-05%2Fypsrd2ru%2FANI-20250504171639.jpg?auto=format%2Ccompress&fit=max&w=480'
    },
    {
        id: 1,
        image_url: 'https://media.assettype.com/freepressjournal/2025-05-05/l2wvkbzf/GujratBoardResult2025.jpg'
    }
]

const {width : screenWidth} =  Dimensions.get('window')


const HomeCarousel = () => {
  return <View style={styles.container}>
    <Carousel autoPlayInterval={2000} 
    data={IMAGES}
    height={200}
    loop={true}
    width={screenWidth}
    mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 50,
				}}
    renderItem={({item}) => (
      <Image
      resizeMode="cover" 
      source={{uri:item.image_url}}
                  style={styles.image}
      />
    )} />
  </View>
}

const styles = StyleSheet.create({
  container:{
    width:screenWidth,
    height:200,
  }, image:{
    flex:1,
    borderRadius:12
  }
})

export default HomeCarousel;
