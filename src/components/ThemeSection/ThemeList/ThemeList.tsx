import { themeListData } from '@/mocks/mockData';

import { Content } from '@/components/ui/Layout/Content';
import { Grid } from '@/components/ui/Layout/Grid';

import { ThemeListItem } from './ThemeListItem';
import { themeListStyle } from './styles';

export const ThemeList = () => {
  return (
    <Content height="fit-content" justifyContent="center">
      <Grid
        css={themeListStyle}
        columns={{
          initial: 4,
          lg: 6,
          md: 6,
          sm: 4,
        }}
      >
        {themeListData.map((theme) => {
          return (
            <ThemeListItem
              key={theme.id}
              imageSrc={theme.imageSrc}
              themeTitle={theme.themeTitle}
            />
          );
        })}
      </Grid>
    </Content>
  );
};
