import app from "./app";

const main = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server: ", error);
  }
};

main();
