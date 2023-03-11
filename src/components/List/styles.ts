import { styled } from "../../styles";

export const ListHeaderContainer = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    margin: "4rem 0 2rem 0"
});


export const ListHeaderLabel = styled("p", {
    fontWeight: "bold",
    variants: {
        variant: {
            primary: {
                color: "$blue"
            },
            secondary: {
                color: "$purple"
            }
        }
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const ListHeaderLabelBullet = styled("span", {
    fontWeight: "bold",
    color: "$white",
    background: "$gray400",
    borderRadius: "1rem",
    fontSize: "12px",
    padding: "5px",
    marginLeft: ".5rem"
});


export const NoDataContainer = styled("div", {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    margin: "1rem 0rem",
    padding: "6rem 0",
    borderTop: "1px solid $gray400"
});

export const NoDataTitle = styled("div", {
    fontWeight: "bold",
    fontSize: "16px",
    color: "$gray300",
});

export const NoDataLogo = styled("img", {
    width: "56px",
    height: "56px",
    margin: "1rem auto"
});

export const NoDataSubitle = styled("div", {
    fontWeight: "regular",
    fontSize: "16px",
    color: "$gray300",
});

export const ListItemContainer = styled("div", {
    display: "grid",
    gridTemplateColumns: "1rem auto 1rem",
    gap: "1rem",
    alignItems: "center",
    backgroundColor: "$gray500",
    padding: "1rem 1.5rem 1rem 1rem",
    marginBottom: "1rem",
    borderRadius: ".5rem"
});

export const InputContainer = styled("div", {
    display: "grid",
    gridTemplateColumns: "6fr 1fr",
    gap: 10,

});

export const InputContainerCheck = styled("button", {
    cursor: "pointer",
    background: "transparent",
    border: 0

});

export const InputContainerRemove = styled("button", {
    cursor: "pointer",
    background: "transparent",
    color: "$gray300",
    border: 0
});


export const Input = styled("input", {
    height: "54px",
    width: "100%",
    backgroundColor: "$gray500",
    color: "$gray300",
    border: 0,
    borderRadius: 8,
    outline: 0,
    padding: "1rem",
});
