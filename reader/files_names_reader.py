import os

# Вкажіть шлях до папки, з якої потрібно зчитати назви файлів
folder_path = input("Введіть назву потрібної папки (тобто пароль): ")
folder_path = f"./files/{folder_path}"

# Отримуємо список файлів у вказаній папці
try:
    file_names = os.listdir(folder_path)
except FileNotFoundError:
    print("Вказана папка не знайдена. Перевірте шлях.")
    exit()

# Вказуємо ім'я файлу для запису (файл буде на тому ж рівні, що і скрипт)
output_file = './reader/file_names.txt'

# Очищаємо файл перед записом нових назв
with open(output_file, 'w', encoding='utf-8') as f:  # Відкриваємо файл у режимі 'w' (очищення)
    pass  # Просто відкриваємо файл, щоб очистити його

# Записуємо назви файлів у вже існуючий текстовий файл
with open(output_file, 'a', encoding='utf-8') as f:  # Відкриваємо файл у режимі 'a' (додавання)
    for file_name in file_names:
        f.write('"' + file_name + '"' + ',' + '\n')

print(f"Назви файлів успішно записані у файл {output_file}.")