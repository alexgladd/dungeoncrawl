import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import './Game.css';

import { connect } from 'react-redux';
import { loadNextLevel } from '../actions/global';
import { teleportHero } from '../actions/hero';

import LevelPainter from '../game/levelpainter';

// map helpers
const getMapWidth = () => {
  return window.innerWidth - 2;
}

const getMapHeight = () => {
  return window.innerHeight - 100 - 2;
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.mapCanvasRef = React.createRef();
    this.levelPainter = null;

    this.handleGlobalKeyDown = this.handleGlobalKeyDown.bind(this);
  }

  handleGlobalKeyDown(evt) {
    console.log('Global key down', evt);
  }

  componentDidMount() {
    const { nextLevel } = this.props;

    window.addEventListener('keydown', this.handleGlobalKeyDown);
    this.mapCanvasRef.current.focus();

    this.levelPainter = new LevelPainter(this.mapCanvasRef.current);
    
    nextLevel();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleGlobalKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    const { level, hero } = this.props;

    // things to check for before painting
    if (hero.position === null) {
      this.props.spawnHero(level);
    } else {
      this.levelPainter.repaint(level);
    }
  }

  render() {
    return (
      <div className="Game">
        <Header />
        <Map width={getMapWidth()} height={getMapHeight()} canvasRef={this.mapCanvasRef} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game,
  hero: state.hero,
  level: state.level
});

const mapDispatchToProps = (dispatch) => ({
  nextLevel() { dispatch(loadNextLevel()); },
  spawnHero(level) { dispatch(teleportHero(level.spawnLocation)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
