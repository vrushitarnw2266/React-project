import { useParams } from "react-router";

const UserDetails = () => {
    const { username } = useParams();

    return(
        <>
        <h1 className="text-2xl mt-5 p-2 ml-4">Hello User{username}</h1>
        </>
    );
};

export default UserDetails;