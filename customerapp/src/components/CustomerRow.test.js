import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';

describe("testing customer row component", () => {
    // dependecies from CustomerList
    let callback = jest.fn(); // mock callback instead of this.props.delEvent(id);
    let c = {
        "id": 4,
        "firstName": "Monica",
        "lastName": "Geller"
    };

    // above are dependecies from CustomerList

    it("render customer row", () => {
        render(<CustomerRow 
            delEvent={(id) =>  callback(id)}
            customer ={c} key={c.id}/>);

        let elem = screen.getByText(/Monica/i);
        screen.debug();
        expect(elem).toBeInTheDocument();
    });

    it("delete customer row", () => {
        render(<CustomerRow 
            delEvent={(id) =>  callback(id)}
            customer ={c} key={c.id}/>);
        let btn = screen.queryByRole("button");
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(4);
    });
});
