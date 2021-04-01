import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
    
    state = {
        habits: [],
    }
    
    handleIncrement = (habit) => {
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                return {...item, count : item.count + 1}
            }
            return item;
        })
        this.setState({habits});
    };

    handleDecrement = (habit) => {
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                const count = item.count - 1;
                return {...item , count : count < 0? 0 : count}
            }
            return item;
        })
        this.setState({habits});
    };

    handleDelete = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits.splice(index,1);
        this.setState({habits});
    };

    handleAdd = (name) => {
        const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
        this.setState({habits});
    }

    handReset = () => {
        const habits = this.state.habits.map(item => {
            if(item.count !==0){
                return {...item, count : 0};
            }
            return item;
        });
        this.setState({habits});
    }

    render() {
        return (
            <div>
                <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
                <Habits  
                    habits={this.state.habits} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handReset}
                />    
            </div>
        )
    }
}

export default App;
