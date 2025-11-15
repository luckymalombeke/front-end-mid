import myImage from "../image/myimage.jpg";

export default function Home({ profile }) {
  return (
    <div className="text-center">
      <img 
        src={myImage} 
        alt="My Profile" 
        className="mx-auto w-48 rounded-lg shadow"
      />
      <h1>Welcome to My Portofolio</h1>
    </div>
  );
}
