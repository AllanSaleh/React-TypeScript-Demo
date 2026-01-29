type User = {
  name: string;
  age: number;
  isAdmin: boolean;
}

const UserProfile = ({ user } : {user : User}) => {

  const users: User[] = [];
  users.push(user);
  users.push({name: "bob", age:28, email:"bob@gmail.com"});

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
    </div>
  )
}

export default UserProfile