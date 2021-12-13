import classNames from 'classnames';
import { Component, ReactNode } from 'react';

import css from './Select.module.scss';

interface Props {
  items: string[],
  selected: string;
  onSelected: (selected: string) => void;
}

class Select extends Component<Props> {
  state = {
    menuOpen: false,
    // items: ['Toto', 'Titi', 'Tata'],
  };

  handleClickSelected = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  // render(): ReactNode {
  //   let menuJsx = null;

  //   if (this.state.menuOpen) {
  //     menuJsx = (
  //       <div className={css.menu}>
  //         <div className={css.item}>Rouge</div>
  //         <div className={css.item}>Vert</div>
  //         <div className={css.item}>Bleu</div>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div className={css.host}>
  //       <div className={css.selected} onClick={this.handleClickSelected}>Vert</div>
  //       {menuJsx}
  //     </div>
  //   );
  // }

  render(): ReactNode {
    // const itemsJsx: ReactNode[] = [];

    // for (const item of this.state.items) {
    //   itemsJsx.push(<div className="item" key={item}>{item}</div>)
    // }

    // const itemsJsx = this.state.items.map((item, index) => <div className={css.item} key={item}>{item}</div>);

    return (
      <div className={css.host}>
        <div className={css.selected} onClick={this.handleClickSelected}>
          {this.props.selected}
        </div>
        {this.state.menuOpen && (
          <div className={css.menu}>
            {this.props.items.map((item, index) => (
              <div className={css.item} key={item} onClick={() => this.props.onSelected(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // render(): ReactNode {

  //   // let menuClassName = css.menu;

  //   // if (this.state.menuOpen) {
  //   //   menuClassName += ' ' + css.menuOpen;
  //   // }

  //   return (
  //     <div className={css.host}>
  //       <div className={css.selected} onClick={this.handleClickSelected}>
  //         Vert
  //       </div>
  //       <div className={classNames(css.menu, {[css.menuOpen]: this.state.menuOpen})}>
  //           <div className={css.item}>Rouge</div>
  //           <div className={css.item}>Vert</div>
  //           <div className={css.item}>Bleu</div>
  //         </div>
  //     </div>
  //   );
  // }
}

export default Select;
