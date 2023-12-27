import TestNav from "./components/TestNav";
import fakeApiData from "./data/FakeApi";

export default function Example() {
  const register = fakeApiData.register;
  const auth = fakeApiData.authenticate;
  return (
    // <div>
    //   <h2>Register Data</h2>
    //   <ul>
    //     {Object.entries(register).map(([key, value]) => (
    //       <li key={key}>
    //         <strong>{key}: </strong> {value}
    //       </li>
    //     ))}
    //   </ul>

    //   <h2>Authenticate Data</h2>
    //   <ul>
    //     {Object.entries(auth).map(([key, value]) => (
    //       <li key={key}>
    //         <strong>{key}: </strong> {value}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <TestNav />
  );
}
