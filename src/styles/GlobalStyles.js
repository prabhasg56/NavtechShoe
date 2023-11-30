import { StyleSheet } from "react-native";

export const placeholerColor = "#9E9898";

const GlobalStyles = StyleSheet.create({
  fontFamilies:{
    openSansB:{
      fontFamily: "OpenSans-Bold",
    },
    openSansR:{
      fontFamily: "OpenSans-Regular",
    }
  },
  creditsMfgLogo:{
    fontWeight: 700,
    fontSize: 17,
    color: "#E7E7E7"
  },
  headline: {
    fontFamily: "Montserrat-Regular",
  },
  paragraph: {
    fontFamily: "OpenSans-Regular",
  },
  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
  },
  background: {
    backgroundColor: "#0D1A26",
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },
  input: {
    color: "#9E9898",
    borderRadius: 10,
    height: 48,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    fontFamily: "OpenSans-Bold",
    fontSize: 16,
  },
  montHeadline: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    lineHeight: 22,
  },
  boldHeadline: {
    fontFamily: "OpenSans-Bold",
    fontSize: 20,
    lineHeight: 32,
  },
  smallboldHeadline: {
    fontFamily: "OpenSans-Bold",
    fontSize: 17,
    lineHeight: 19,
  },
  semiBoldHeadline: {
    fontFamily: "OpenSans-Bold",
    fontSize: 15,
    lineHeight: 24,
    color: "black",
  },
  bigHeadline: {
    fontFamily: "OpenSans-Sem",
    fontSize: 20,
    lineHeight: 32,
    color: "black",
  },

  normalHeadline: {
    fontFamily: "OpenSans-regular",
    fontSize: 15,
    lineHeight: 24,
    color: "black",
  },
  status: {
    ready: {
      color: "#F9D144",
    },
    dispatched: {
      color: "#4BCBEB",
    },
    delivered: {
      color:"#1BCFB4"
    },
    
  },
  complaintStatus: {
    RESOLVED: {
      color: "#1BCFB4",
    },
    PENDING: {
      color:"#F9D144"
    }
  },

  price: {
    fontFamily: "OpenSans-Bold",
    fontSize: 13,
    color:"#BA2B20",
  }
});

export default GlobalStyles;
