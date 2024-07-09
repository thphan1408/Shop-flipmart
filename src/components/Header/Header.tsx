import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  
}

const Header: React.FC<Props> = () => {
  const { t } = useTranslation()

  return <div>Header <p>{t('welcomee')}</p></div>
};

export default Header;