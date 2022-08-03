import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getFilter } from 'redux/phonebookSelectors';
import * as phonebookActions from '../../redux/phonebookActions';
// import PropTypes from 'prop-types';
import { FilterTitle, FilterWrap, FilterInput } from './Filter.styled';

const filterId = nanoid();

export const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <FilterWrap>
            <FilterTitle htmlFor={filterId}>Find Contacts by name</FilterTitle>
            <FilterInput type="text" value={value} onChange={(evt) => dispatch(phonebookActions.changeFilter(evt.target.value))} id={filterId} />
        </FilterWrap>
    );
}
   
