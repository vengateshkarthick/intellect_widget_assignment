import {fireEvent, render, screen} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import Measuresleep from '../Componets/MeasureSleep';

describe('Testing MeasureSleep', () => {
  const moc = {
    selectedRange: 0,
    setSelectedRange: jest.fn(),
  }
  test('Testing my MeasureSleep is present in dom or not', () => {
    render(<Measuresleep {...moc} />)
    const textContent = screen.getByText("1. How was your sleep today");
    expect(textContent).toBeTruthy();
  });
  test('Checking the rangleHandler is called properly', () => {
    render(<Measuresleep {...moc} />)
    const rangeEle = screen.getByRole('meter');
    fireEvent.change(rangeEle, { target: { value: 5 }});
    expect(moc.setSelectedRange).toBeCalledWith("5");
  });
  test('Checking the range  is displays properly', () => {
    render(<Measuresleep {...moc} selcetdRange={5} />)
    const val = screen.getByRole("contentinfo")
    expect(val.innerHTML).toEqual("5");
  });
})
