const state = {
  backgroundColor: "#FFF",
};

const { backgroundColor } = state;

function changeBackgroundColor({ backgroundColor }) {
  return {
    backgroundColor,
    color: "#999",
  };
}

console.log(backgroundColor);

console.log(changeBackgroundColor({ backgroundColor }));

console.log(typeof { backgroundColor });

const color = "#fff";

console.log(typeof { color });
