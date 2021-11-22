import Yorumlar from "./Yorumlar/Yorumlar";

const AppYorum = () => {
  return (
    <div>
      <h1>Kullanıcı Yorumları</h1>
      <Yorumlar
        commentsUrl="http://localhost:3000/"
        currentUserId="1"
      />
    </div>
  );
};

export default AppYorum;

