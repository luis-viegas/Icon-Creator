import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Footer } from './components';

export default function Content() {
  return (
    <SideNavBarLayout title={appInfo.title}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route
            exact
            key={path}
            path={path}
            component={component}
          />
        ))}
        <Redirect to={'/home'} />
      </Switch>
      <Footer>
        Esta WebApp tem um propósito exclusivo de construção iconográfica para a Ambidata - Digital Innovation, Solutions & Consulting,Lda. Todas as marcas presentes são marcas registadas.
        Não está permitida a reprodução, manipulação ou utilização sem expressa autoricação da Ambidata - Digital Innovation, Solutions & Consulting,Lda de todo ou parte do conteúdo/os 
        textuais, imagéticos e gráficos desta WebApp.
        A Ambidata Lda. é detentora do registo do software na Assoft Nº 993/D/03, sendo proprietária de toda a documentação, código fonte e binários do software.
      </Footer>
    </SideNavBarLayout>
  );
}
