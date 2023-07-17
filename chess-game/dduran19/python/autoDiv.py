def createChessBoard():
    with open('chess.html','a') as file:
        for row in range(9):
            if row==0: continue
            for column in range(9):
                if column==0: continue
                file.write(f"""<div class="chessTile row-{row} col-{column}" id="cTile{row}-{column}"></div>\n""")

if __name__ == '__main__':
    createChessBoard()