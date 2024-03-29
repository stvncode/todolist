import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import {Checkbox} from '../components/Checkbox';
import { FaItalic } from 'react-icons/fa';

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: jest.fn(),
                })),
            })),
        })),
    },
}));

describe('<Checkbox />', () => {
    describe('Success', () => {
        it('renders the task checkbox', () => {
            const {queryByTestId} = render(<Checkbox id="1" />);
            expect(queryByTestId('checkbox-action')).toBeTruthy();
        });
        it('renders the task checkbox and accepts a onClick', () => {
            const {queryByTestId} = render(<Checkbox id="1" />);
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.click(queryByTestId('checkbox-action'));
        });
    });
});