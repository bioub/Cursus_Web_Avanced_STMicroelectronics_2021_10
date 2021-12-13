import classNames from 'classnames';
import { Component, ReactNode } from 'react';

import css from './Select.module.scss';

class Select extends Component {
  state = {
    menuOpen: false,
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

  // render(): ReactNode {
  //   return (
  //     <div className={css.host}>
  //       <div className={css.selected} onClick={this.handleClickSelected}>
  //         Vert
  //       </div>
  //       {this.state.menuOpen && (
  //         <div className={css.menu}>
  //           <div className={css.item}>Rouge</div>
  //           <div className={css.item}>Vert</div>
  //           <div className={css.item}>Bleu</div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  render(): ReactNode {

    // let menuClassName = css.menu;

    // if (this.state.menuOpen) {
    //   menuClassName += ' ' + css.menuOpen;
    // }

    return (
      <div className={css.host}>
        <div className={css.selected} onClick={this.handleClickSelected}>
          Vert
        </div>
        <div className={classNames(css.menu, {[css.menuOpen]: this.state.menuOpen})}>
            <div className={css.item}>Rouge</div>
            <div className={css.item}>Vert</div>
            <div className={css.item}>Bleu</div>
          </div>
      </div>
    );
  }
}

export default Select;
