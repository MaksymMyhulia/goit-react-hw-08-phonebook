import { Section } from "components/Section/Section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Header } from "components/Header/Header";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

const Contacts = () => {
  return (
    <Section title="Phonebook">
      <ContactForm />
      <Header title="Contacts" />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Section>
  );
};

export default Contacts;