import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Grocery',
          subtitle: 'Shop Now',
          linkUrl: 'grocery',
          imageUrl: 'https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?cs=srgb&dl=pexels-erik-scheel-95425.jpg&fm=jpg',
          id: 1
        },
        {
          title: 'Allergies',
          subtitle: 'Let us know what to avoid',
          linkUrl: '',
          imageUrl: 'https://images.pexels.com/photos/6097883/pexels-photo-6097883.jpeg?cs=srgb&dl=pexels-laura-james-6097883.jpg&fm=jpg',
          id: 2
        },
        {
          title: 'Deals',
          subtitle: 'Shop Now',
          linkUrl: '',
          imageUrl: 'https://images.pexels.com/photos/5869604/pexels-photo-5869604.jpeg?cs=srgb&dl=pexels-max-fischer-5869604.jpg&fm=jpg',
          id: 3
        },
        {
          title: 'Recipes',
          subtitle: 'Try Something New',
          linkUrl: '',
          imageUrl: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?cs=srgb&dl=pexels-dapurmelodi-1109197.jpg&fm=jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'Restaurant',
          subtitle: 'Shop Now',
          linkUrl: '',
          imageUrl: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({  id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;