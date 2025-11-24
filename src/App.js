import { useState } from "react";
import ContactCard from "./components/ContactCard";
import LayoutSwitcher from "./components/LayoutSwitcher";

function App() {

  const [isSwitch, setIsSwitch] = useState(false);

  const contacts = [
    { id: 1, name: "Alice Johnson", phone: "555-1234", favorite: false },
    { id: 2, name: "Bob Smith", phone: "555-5678", favorite: true },
    { id: 3, name: "Charlie Davis", phone: "555-8765", favorite: false },
  ];

  return (
    <>
      <LayoutSwitcher isSwitch={isSwitch} setIsSwitch={setIsSwitch} />
      <div className={`${isSwitch ? "content" : "container"}`}>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
}

export default App;
