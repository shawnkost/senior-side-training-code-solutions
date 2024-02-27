import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { Button } from './Button';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setIndex] = useState(0);

  function handleNext(): void {
    const nextIndex = (currentIndex + 1) % items.length;
    setIndex(nextIndex);
  }

  function handlePrev(): void {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setIndex(prevIndex);
  }

  function handleSelect(index: number) {
    setIndex(index);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <Button onClick={handlePrev} text="Prev" />
      <Indicators
        current={currentIndex}
        count={items.length}
        onClick={handleSelect}
      />
      <Button onClick={handleNext} text="Next" />
    </div>
  );
}
