import { Text, View, Image, Button, Pressable, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Index() {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "grey",
        alignItems: "center",
      }}
    >
      \
      <View
        style={{
          backgroundColor: "rgb(72, 189, 204)",
          height: 400,
          width: 300,
          padding: 30,
          borderRadius: 20,
          marginTop: 30,
        }}
      >
        <Image
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            display: "flex",
            justifyContent: "center",
            marginTop: 40,
            marginLeft: 20,
          }}
          source={{
            uri: "data:image/png;base64,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",
          }}
        ></Image>
        <Text
          style={{
            marginLeft: 75,
            fontWeight: "700",
            marginTop: 15,
            fontSize: 15,
          }}
        >
          Farhan Akhtar
        </Text>
        <Text style={{ marginLeft: 55 }}>Android Development</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
            marginTop: 15,
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => Linking.openURL("https://github.com/farhanakhtar99")}
          >
            <FontAwesome name="github" size={28} />
          </Pressable>

          <Pressable
            onPress={() =>
              Linking.openURL("https://linkedin.com/in/yourusername")
            }
          >
            <FontAwesome name="linkedin" size={28} />
          </Pressable>

          <Pressable
            onPress={() =>
              Linking.openURL("https://instagram.com/farhanakhtar_01")
            }
          >
            <FontAwesome name="instagram" size={28} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
