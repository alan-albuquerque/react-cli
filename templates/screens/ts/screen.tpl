import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'src/stores';
import { withTheme } from 'src/theme';

interface Props {
}

class {{ pascalCase name }}Screen extends Component<Props> {
  render() {
    const {} = this.props;
    return (
      <Container>
        <Content>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      action
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)({{ pascalCase name }}Screen);

const styles = withTheme((theme) => ({
}));
