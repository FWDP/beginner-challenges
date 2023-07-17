def createChessBoard():
    with open('chessTile.css','a') as file:
        dark=True
        file.write("/* for Player 1 tiles */\n\n")

        for row in range(9):
            if row==0: continue
            for column in range(9):
                if column==0: continue
                if dark: 
                    file.write(f', #cTile{row}-{column}')  
                dark = not dark
            dark = not dark
        file.write('{\n\tbackground-color: var(--chess-tile-dark)\n}\n')
                
                
        

if __name__ == '__main__':
    createChessBoard()