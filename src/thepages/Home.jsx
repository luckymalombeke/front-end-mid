import myImage from "../image/myimage.jpg";

export default function Home({ profile }) {
  return (
    <div className="text-center">
      <img 
        src={myImage} 
        alt="My Profile" 
        className="mx-auto h-[500px] w-auto rounded-lg shadow object-cover"
      />
      <h1>Welcome to My Portofolio</h1>
    </div>
  );
}
