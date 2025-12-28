import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  title,
  adult,
  backdrop_path,
  genre_ids,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  video,
  vote_average,
  vote_count,
}: Movie) => {
  return (
    <Link
      href={`/movies/${id}`}
      asChild
    >
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placeholder.com/600×400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white" numberOfLines={1}>{title}</Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image
            source={icons.star}
            className="size-4"
          />
          <Text className="text-white text-xs font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-xs font-medium text-light-300 mt-1">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs font-medium text-light-300 mt-1 uppercase">
            Movie{" "}
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
