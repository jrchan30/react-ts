import { useEffect, useRef, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCSS from './Cart.module.css';
import { AppStateContext } from './AppState';

// interface Props {}

const Cart = () => {
  const containerRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.target);
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      //   (e.target as HTMLSpanElement).nodeName;
    }
    setIsOpen(!isOpen);
  };

  return (
    <AppStateContext.Consumer>
      {(state) => {
        const itemsCount = state.cart.items.reduce(
          (acc, curr) => (acc += curr.quantity),
          0
        );
        return (
          <div className={CartCSS.cartContainer}>
            <button
              className={CartCSS.button}
              type="button"
              onClick={handleClick}
            >
              <FiShoppingCart />
              <span>{itemsCount} pizza(s)</span>
            </button>
            <div
              className={CartCSS.cartDropDown}
              style={{ display: isOpen ? 'block' : 'none' }}
              ref={containerRef}
            >
              <ul>
                {state.cart.items.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.name} &times; {item.quantity}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default Cart;
