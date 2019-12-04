import { Component } from 'react';
import filter from 'lodash/filter';

import findCategory from './findCategory';
import rootCategory from './rootCategory';

export default class extends Component {
  constructor(props) {
    super(props);

    const { setMaterialCategories, materialCategories, categories } = props;

    const { created } = props;

    const createdCategory = findCategory(categories, created.categoryId);
    const root = rootCategory(categories, createdCategory);
    props.categoryFilled.actions.setCategory(props.match.params.id);

    if (root.multipleChoice) {
      return;
    }

    setMaterialCategories(
      filter(materialCategories, ({ categoryId }) => {
        if (categoryId === created.categoryId) {
          return true;
        }

        const category = findCategory(categories, categoryId);
        return rootCategory(categories, category) !== root;
      }),
    );
  }

  render() {
    return null;
  }
}
