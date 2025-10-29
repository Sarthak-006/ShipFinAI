@echo off
echo ========================================
echo Ship Model Setup Helper
echo ========================================
echo.

REM Create the models directory
if not exist "public\models" (
    mkdir "public\models"
    echo [OK] Created public\models folder
) else (
    echo [OK] public\models folder already exists
)

echo.
echo ========================================
echo Next Steps:
echo ========================================
echo.
echo 1. Download a ship model from:
echo    - Sketchfab: https://sketchfab.com/search?q=ship
echo    - Poly Pizza: https://poly.pizza
echo.
echo 2. Extract the .zip file
echo.
echo 3. Find the .glb file (usually scene.glb)
echo.
echo 4. Copy it to: public\models\ship.glb
echo.
echo 5. Visit: http://localhost:3000/myship
echo.
echo ========================================
echo.
pause

