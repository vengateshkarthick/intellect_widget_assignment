import {fireEvent, render, screen} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import RateResult from '../Componets/RateResult';

describe('RateResult is working properly', () => {
    const  mocProps = {
        qualityText: 'Rating yourself will give a better understanding..',
        rank: 0,
    }
    test('Checking the component presence in dom', () => {
        render(<RateResult {...mocProps} />);
        expect(mocProps.qualityText).toBeTruthy();
    });
    test('Checking the content is working fine for range two', () => {
      mocProps.qualityText = "Nice to hear from you keep it up !";
      mocProps.range = 2;
      render(<RateResult {...mocProps} />)
      const content = screen.getByRole('contentinfo');
      expect(content.innerHTML).toBe(`&nbsp;${mocProps.qualityText}&nbsp;`);
      expect(content.classList.contains("btn-success")).toBeTruthy();
    });
     test('Checking the content is working fine for range One', () => {
      mocProps.qualityText = "Listening to good music will still increase your sleep quality";
      mocProps.range = 1;
      render(<RateResult {...mocProps} />)
      const content = screen.getByRole('contentinfo');
      expect(content.innerHTML).toBe(`&nbsp;${mocProps.qualityText}&nbsp;`);
      expect(content.classList.contains("btn-secondary")).toBeTruthy();
    });
     test('Checking the content is working fine for range Negative', () => {
      mocProps.qualityText = "Ohoo kindly consult your doctor";
      mocProps.range = -1;
      render(<RateResult {...mocProps} />)
      const content = screen.getByRole('contentinfo');
      expect(content.innerHTML).toBe(`&nbsp;${mocProps.qualityText}&nbsp;`);
      console.log(content.classList.values());
      expect(content.classList.contains("btn-danger")).toBeTruthy();
    })
})