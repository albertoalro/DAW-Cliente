# Pedir al usuario que introduzca un número
numero = int(input("Introduce un número: "))

# Comprobamos si el número es positivo
if numero > 0:
    print("El número introducido es positivo.")
# Comprobamos si el número es negativo
elif numero < 0:
    print("El número introducido es negativo.")
# En otro caso, el número será cero
else:
    print("El número introducido es cero.")

# Convertimos el texto a número entero
numero_entero = int(numero)
# Calculamos el doble
doble = numero_entero * 2
# Mostramos el resultado
print("El doble del número introducido es:", doble)