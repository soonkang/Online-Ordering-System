import Comments from "./Comments";

const DF = () => {
  return (
    <div>
<h1 style={{ textAlign: 'center' }}>Taste Talk: Join the Conversation</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default DF;