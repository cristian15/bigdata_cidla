from flask import Flask, jsonify, request 
from ConexionDB import app, historiales, arquetipos, test
from bson import ObjectId
import json
from pprint import pprint
#---------------
#    0.177 sec
#---------------
import warnings
warnings.filterwarnings('ignore')

if __name__ == "__main__":
    indexes = []
    for attr in arquetipos.find_one().keys() :
        try:
            print(type(attr))
            #print (attr.keys())
        except:
            print("Error")