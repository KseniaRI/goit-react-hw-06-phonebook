import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as phonebookActions from '../../redux/phonebookActions';
import { nanoid } from 'nanoid';
import { PageTitle } from '../page-title/PageTitle';
import { PhonebookForm } from '../phonebook-form/PhonebokForm';
import { SectionTitle } from '../section-title/SectionTitle';
import { Filter } from '../filter/Filter';
import { ContactList } from '../contact-list/ContactList';
import { Container } from './App.styled';
 

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const items = useSelector((state) => state.items);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(items));
  }, [items])

  const formSubmitHandler = ({ name, number }, { resetForm }) => {
    const contactNames = items.map(item => item.name);

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { name, number, id: nanoid() };
      dispatch(phonebookActions.saveContact(newContact));
    }
    resetForm();
  }
  
  const visibleContacts = useMemo(() => {
    return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, items]);

    return (
    <Container>
      <PageTitle title="Phonebook" />
      <PhonebookForm onSubmit={formSubmitHandler} /> 
      <SectionTitle title="Contacts"/>
      <Filter value={filter} onChange={(evt) => dispatch(phonebookActions.changeFilter(evt.target.value))} />
      <ContactList contacts={visibleContacts} deleteContact={(evt) => dispatch(phonebookActions.deleteContact(evt.target.id))} />
    </Container>
    )
}
