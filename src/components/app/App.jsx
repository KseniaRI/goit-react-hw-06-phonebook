import { PageTitle } from '../page-title/PageTitle';
import { PhonebookForm } from '../phonebook-form/PhonebokForm';
import { SectionTitle } from '../section-title/SectionTitle';
import { Filter } from '../filter/Filter';
import { ContactList } from '../contact-list/ContactList';
import { Container } from './App.styled';

export const App = () => {
    return (
    <Container>
      <PageTitle title="Phonebook" />
      <PhonebookForm /> 
      <SectionTitle title="Contacts"/>
      <Filter/>
      <ContactList />
    </Container>
    )
}
