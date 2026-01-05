import { makeStyles } from "@mui/styles";

const useBankContentStyles = makeStyles({
  moneyBox: {
    border: "1px solid black",
    padding: "20px 10px",
    marginBottom: 20,
    borderRadius: "5px",
  },
  moneyLabel: {
    fontSize: "21px",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
});

export default useBankContentStyles;
