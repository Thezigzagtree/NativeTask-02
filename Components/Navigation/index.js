import { createStackNavigator } from "react-navigation";

import CoffeeCart from "../CoffeeCart/index";
import CoffeeDetail from "../CoffeeDetail/index";
import CoffeeList from "../CoffeeList/index";
import Login from "../Login/index";

const MyStack = createStackNavigator(
  {
    LoginScreen: Login,
    CoffeeListScreen: CoffeeList,

    CoffeeDetailScreen: CoffeeDetail,
    CoffeeCartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen",
    navigationOptions: {
      headerTintColor: "white",

      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: { fontWeight: "bold" }
    },
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    }
  }
);

export default MyStack;
