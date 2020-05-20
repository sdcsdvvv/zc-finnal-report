code中，main.ipynb为包括了预处理、特征提取、模型训练和结果预测的代码。UseModel为直接使用模型进行结果预测的代码。
由于代码的编写在windows环境下，所以如果要更换运行的主机，需要手动改写部分地址，在代码中已经用注释标出。作者的数据集存储结构为           
F:/dataset(主目录){   /test （测试数据目录）/TESTXX（文件名）
                      /train（训练集数据，为了方便已经将文件名中的0全部去掉，如果不想去掉可以替换为注释中的代码）

可能需要的环境：
pandas=1.0.1
scipy=1.3.1
numpy=1.17.3
matplotlib=3.1.2
seaborn=0.10.0
pywavelets=1.1.1
sklearn=0.22.2.post1
lightgbm=2.3.1
pywt=1.0.3
joblib=0.13.2
csv=1.0

ipykernel=5.1.3
ipython=7.9.0
jupyter=1.0.0
