import {fireEvent, render, screen} from '@testing-library/react'
import {expect, jest, test} from '@jest/globals';
import SleepLevel from '../Componets/SleepLevel';


describe('Testing SleepLevel', () => {
  const moc = {
    selectedLevel: 0,
    setSelectedLevel: jest.fn(),
  }
  test('Testing my SleepLevel is present in dom or not', () => {
    render(<SleepLevel {...moc} />)
    expect("2. How do you feel today after sleep").toBeTruthy();
  });
  test('Checking whether the levelHandler is called properly', () => {
    render(<SleepLevel {...moc} />)
    const listElement = screen.getAllByRole("listitem");
    fireEvent.click(listElement[0]);
    expect(moc.setSelectedLevel).toHaveBeenCalledWith("5")
  });
  test('Checking whether the content is changing properly', () => {
    render(<SleepLevel {...moc} selectedLevel={5} />)
    const content = screen.getByRole("contentinfo");
    expect(content.innerHTML).toEqual("Very Active");
  });
})